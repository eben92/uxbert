import sharp from "sharp";
import {
  FastAverageColor,
  FastAverageColorOptions,
  FastAverageColorResult,
} from "fast-average-color";

const fac = new FastAverageColor();

const MIN_SIZE = 10;
const MAX_SIZE = 100;

/**
 * Prepares the size and position for image processing.
 *
 * @param originalSize - The original size of the image.
 * @param options - The options for image processing.
 * @returns An object containing the source and destination size and position.
 */
function prepareSizeAndPosition(
  originalSize: { width: number; height: number },
  options: FastAverageColorOptions
) {
  const srcLeft = options.left ?? 0;
  const srcTop = options.top ?? 0;
  const srcWidth = options.width ?? originalSize.width;
  const srcHeight = options.height ?? originalSize.height;

  let destWidth = srcWidth;
  let destHeight = srcHeight;

  if (options.mode === "precision") {
    return {
      srcLeft,
      srcTop,
      srcWidth,
      srcHeight,
      destWidth,
      destHeight,
    };
  }

  let factor;

  if (srcWidth > srcHeight) {
    factor = srcWidth / srcHeight;
    destWidth = MAX_SIZE;
    destHeight = Math.round(destWidth / factor);
  } else {
    factor = srcHeight / srcWidth;
    destHeight = MAX_SIZE;
    destWidth = Math.round(destHeight / factor);
  }

  if (
    destWidth > srcWidth ||
    destHeight > srcHeight ||
    destWidth < MIN_SIZE ||
    destHeight < MIN_SIZE
  ) {
    destWidth = srcWidth;
    destHeight = srcHeight;
  }

  return {
    srcLeft,
    srcTop,
    srcWidth,
    srcHeight,
    destWidth,
    destHeight,
  };
}

/**
 * Generates a color from an image using the Fast Average Color library.
 * @param imageUrl - The URL of the image.
 * @param options - Optional configuration options for generating the color.
 * @returns A promise that resolves to the FastAverageColorResult object containing the generated color information.
 */
export async function generateColorFromImage(
  imageUrl: string,
  options: FastAverageColorOptions = {}
): Promise<FastAverageColorResult> {
  const response = await fetch(imageUrl);
  const arrayBuffer = await response.arrayBuffer();
  const input = Buffer.from(arrayBuffer);

  const left = options.left ?? 0;
  const top = options.top ?? 0;

  let pipe = sharp(input);

  const metadata = await pipe.metadata();

  // If the image has width and height, extract and resize the image.
  if (metadata.width && metadata.height) {
    const size = prepareSizeAndPosition(
      {
        width: metadata.width,
        height: metadata.height,
      },
      options
    );

    pipe = pipe
      .extract({
        left,
        top,
        width: size.srcWidth,
        height: size.srcHeight,
      })
      .resize(size.destWidth, size.destHeight);
  }

  // Ensure the image has an alpha channel.
  const buffer = await pipe.ensureAlpha().raw().toBuffer();
  const pixelArray = new Uint8Array(buffer.buffer);

  return fac.prepareResult(fac.getColorFromArray4(pixelArray, options));
}
