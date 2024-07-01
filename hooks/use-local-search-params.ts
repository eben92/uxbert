import {
  createSearchParams,
  getSearchParamsForLocation,
  URLSearchParamsInit,
} from "@/lib/dom";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useRef } from "react";

type SetURLSearchParams = (
  nextInit?:
    | URLSearchParamsInit
    | ((prevSearchParams: URLSearchParams) => URLSearchParamsInit),
  navigationOptions?: {
    scroll?: boolean;
    replace?: boolean;
    refresh?: boolean;
    keepPreviousParams?: boolean;
  }
) => void;

/**
 *  Hook to manage URLSearchParams in the current URL
 *  and update them with a new key/value pair
 *
 *  @example
 *  const [searchParams, setSearchParams] = useLocalSearchParams();
 *  console.log(searchParams.get("sort"));
 *  setSearchParams({ sort: "price" });
 */

export function useLocalSearchParams(
  defaultInit?: URLSearchParamsInit
): [URLSearchParams, SetURLSearchParams] {
  const pathname = usePathname();
  const search = useSearchParams().toString();

  let defaultSearchParamsRef = useRef(createSearchParams(defaultInit));
  let hasSetSearchParamRef = useRef(false);

  let searchParams = useMemo(() => {
    return getSearchParamsForLocation(
      search,
      hasSetSearchParamRef.current ? null : defaultSearchParamsRef.current
    );
  }, [search]);

  const { push, replace, refresh } = useRouter();

  let setSearchParams = useCallback<SetURLSearchParams>(
    (nextInit, navigationOptions) => {
      let newSearchParams = createSearchParams(
        typeof nextInit === "function" ? nextInit(searchParams) : nextInit
      );

      if (navigationOptions?.keepPreviousParams) {
        let previousParams = createSearchParams(search);

        newSearchParams.forEach((value, key) => {
          previousParams.delete(key);
        });

        newSearchParams.forEach((value, key) => {
          previousParams.append(key, value);
        });

        newSearchParams = previousParams;
      }

      hasSetSearchParamRef.current = true;

      const navigate = navigationOptions?.replace ? replace : push;

      navigate(pathname + "?" + newSearchParams, navigationOptions);

      if (navigationOptions?.refresh) {
        refresh();
      }
    },
    [push, searchParams]
  );

  return [searchParams, setSearchParams];
}
