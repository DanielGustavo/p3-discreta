import ReactSelect, { Props, StylesConfig } from 'react-select';
import CreatableSelect, { CreatableProps } from 'react-select/creatable';
import { lighten } from 'polished';

import * as S from './styles';

type TSelect = Props &
  CreatableProps<any, any, any> & {
    label?: string;
    creatable?: boolean;
  };

function Select({ label, creatable, ...rest }: TSelect) {
  const styles: StylesConfig = {
    input: (styles) => ({
      ...styles,
      fontFamily: 'Inter',
      color: '#fefefe',
      fontSize: '14px',
      fontWeight: 300,
    }),
    valueContainer: (styles) => ({
      ...styles,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: '#fefefe',
      fontWeight: 300,
      fontSize: '14px',
    }),
    control: () => ({
      background: '#161616',
      border: '1px solid #3f3f3f',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px',
      cursor: 'text',
      padding: '10px 4px',
    }),
    placeholder: (styles) => ({
      ...styles,
      color: '#757575',
      fontSize: '14px',
      fontWeight: 300,
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    dropdownIndicator: () => ({
      color: '#fefefe',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    }),
    indicatorsContainer: () => ({
      padding: '0 12px 0 0',
      display: 'flex',
      alignItems: 'center',
      height: '100%',
    }),
    menuList: (styles) => ({
      ...styles,
      background: '#161616',
      borderRadius: '10px',
    }),
    menu: (styles) => ({
      ...styles,
      background: '#161616',
      borderRadius: '10px',
    }),
    noOptionsMessage: (styles) => ({
      ...styles,
      color: '#757575',
      fontSize: '14px',
      fontWeight: 600,
    }),
    option: (styles) => ({
      ...styles,
      background: '#161616',
      color: '#fefefe',
      fontWeight: 300,
      fontSize: '14px',
      cursor: 'pointer',
      ':hover': {
        background: lighten(0.01, '#161616'),
      },
    }),
  };

  return (
    <S.Container>
      {label && <span>{label}</span>}

      {creatable ? (
        <CreatableSelect
          styles={styles}
          formatCreateLabel={(value) => `Criar "${value}"`}
          {...rest}
        />
      ) : (
        <ReactSelect styles={styles} {...rest} />
      )}
    </S.Container>
  );
}

export default Select;
