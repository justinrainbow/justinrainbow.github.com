import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useRef,
} from 'react';

export type EntityWithTypename<Entity> = Entity & {
  __typename: string;
};

export type EntityMap<T> = Map<string, T>;

export type OptionalWithTypename<T, V> = T extends { __typename: string }
  ? never
  : V;

export function useEntityMap<T extends {}>(
  items: T[],
  idGetter: (item: T) => string,
  //   typeGetter: OptionalWithTypename<T, (item: T) => string>
): Map<string, T> {
  const entityMap = useRef<Map<string, T>>(null);

  const ids = items?.map(idGetter);

  return useMemo(() => {
    const initialCache = new Map<string, T>();
    if (!items) {
      return initialCache;
    }
    return items.reduce(
      (cache, item, index) => cache.set(ids[index], item),
      initialCache,
    );
  }, [entityMap, ...ids]);
}

const context = createContext<EntityMap<unknown>>(null);

type Getter<T, R> = (item: T) => R;

export type EntityMapProviderProps<T extends {}> = T extends {
  id: string;
  __typename: string;
}
  ? { items: T[]; idGetter?: Getter<T, string> }
  : {
      items: T[];
      idGetter: Getter<T, string>;
    };

export const EntityMapProvider = <T extends {}>({
  items,
  idGetter,
  children,
}: PropsWithChildren<EntityMapProviderProps<T>>) => {
  const value = useEntityMap<T>(items as T[], idGetter);

  return <context.Provider value={value}>{children}</context.Provider>;
};

export const useEntityMapContext = <T extends {}>(): EntityMap<T> =>
  useContext(context) as EntityMap<T>;

export const useEntityMapRef = <T extends {}>(id: string): T | null =>
  useEntityMapContext<T>().get(id);
