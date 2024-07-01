export type ParamKeyValuePair = [string, string];

export type URLSearchParamsInit =
  | string
  | ParamKeyValuePair[]
  | Record<string, string | string[]>
  | URLSearchParams;

/**
 * Creates a URLSearchParams object using the given initializer
 *
 * This is identical to `new URLSearchParams(init)` except that it also
 * supports arrays as values in the object form of the initializer.
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but  don't want to use an array initializer.
 *
 * for example instead of:
 *
 *    let searchParams = new URLSearchParams({
 *       ["sort", "name"],
 *       ["sort", "price"]
 *    })
 *
 * you can do:
 *
 *    let searchParams = createSearchParams({
 *        sort: ["name", "price"]
 *    })
 *
 * @param init
 * @returns
 */
export function createSearchParams(
  init: URLSearchParamsInit = ""
): URLSearchParams {
  const params =
    typeof init === "string" ||
    Array.isArray(init) ||
    init instanceof URLSearchParams
      ? init
      : Object.keys(init).reduce((memo, key) => {
          const value = init[key];

          return memo.concat(
            Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
          );
        }, [] as ParamKeyValuePair[]);

  return new URLSearchParams(params);
}

export function getSearchParamsForLocation(
  locationSearch: string,
  defaultSearchParams: URLSearchParams | null
): URLSearchParams {
  let searchParams = createSearchParams(locationSearch);

  if (defaultSearchParams) {
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    });
  }

  return searchParams;
}
