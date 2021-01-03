import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../config/api';
import { API_COMPANIES_URI } from '../constants/api';
import theme from '../theme';
import Container from './Generic/Container';
import Button from './Generic/Button';
import { Loader } from './Loader';
import ICompany from '../models/Companies';
import Card from './Card';
import StyledFooter from './Footer';
import CheckBox from './Generic/Checkbox';


const CompaniesContainer = styled(Container)`
  background: ${theme.palette.background.checkBoxList};
`

const Companies: React.FC = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [checkboxList, setCheckboxList] = useState<ICompany[]>([])

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      api.get(API_COMPANIES_URI)
        .then(resp => {
          const data = resp.data.map((company: ICompany) => {
            return { 'name': company.name, 'id': company.id, 'departments': company.departments };
          })
          setCheckboxList(data);
        })
        .finally(() => setIsLoading(false));
    }, 2000)
    return () => clearTimeout(timeoutId);
  }, [])

  const handleChange = (id: string) => {
    console.log(id)
  }

  const renderCheckboxList = () => {
    return checkboxList.map(list => {
      return (<Card key={list.id} onChange={handleChange} name={list.name} id={list.id} departments={list.departments} />)
    })
  }

  return (
    <>
      {
        isLoading ?
          <Loader /> :
          <>
            <CompaniesContainer >
              {renderCheckboxList()}
            </CompaniesContainer >
            <StyledFooter>
              <CheckBox id='selectAll' label='Select All' />
              <Button>Confirm</Button>
            </StyledFooter>
          </>
      }
    </>
  )
};

export default Companies;
