import { PropsWithChildren, createContext, useContext } from 'react';
import { IBrand } from '../../types';

export const DEFAULT_BRAND: IBrand = {
  transparentMode: 'dark',
};

export const Brand = createContext<IBrand>(DEFAULT_BRAND);

export const useBrand = () => useContext(Brand);

export interface IBrandProviderProps {
  brand?: IBrand;
}

export const BrandProvider = ({
  brand,
  children,
}: IBrandProviderProps & PropsWithChildren) => {
  const context: IBrand = { ...DEFAULT_BRAND, ...brand };

  return <Brand.Provider value={context}>{children}</Brand.Provider>;
};
