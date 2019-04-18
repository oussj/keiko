import * as React from 'react';

import { PokemonType } from "redux/Pokemon/types";
import loader from '../../loader.svg';
import Style from './WithDataFetching.style';

const WithDataFetching = <P extends object>(
  fetchFunction: (props: P) => any,
  shouldCallEffect: (props: P) => any[],
  successFunction?: (props: P, data: any) => void,
) => (BaseComponent: React.ComponentType<P>) => (props: P) => {
  const [data] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const {body} = await fetchFunction(props);
          if (successFunction) {
            successFunction(props, body)
          }
        } catch (error) {
          setError(error.toString());
        }
        setLoading(false);
      };

      fetchData();
    },
    [...shouldCallEffect(props)],
  );

  return (
    <React.Fragment>
      {loading ? (
        <Style.Loader src={loader} alt="Loading..."/>
      ) : error ? (
        <Style.Error>{error}</Style.Error>
      ) : (
        <BaseComponent {...props} />
      )}
    </React.Fragment>
  );
};

export default WithDataFetching;
