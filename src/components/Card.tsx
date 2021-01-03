import React from 'react';
import styled from 'styled-components';
import CheckBox from './Generic/Checkbox';
import H3 from './Generic/H3';

const StyledCard = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 8px;
  padding: 13px 16px;
  margin-bottom: 10px;
  box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.05);
`

interface ICard {
  value?: boolean;
  id?: string;
  name: string;
  departments: [{
    code: string;
    label: string;
    value?: boolean;
  }]
  onChange: (v: string) => void;
}

const Card = ({ id, name, departments, onChange }: ICard) => {

  console.log(departments);
  const renderCheckboxes = () => {
    return (
      <>
        {departments.map(department => (
          <CheckBox key={department.code} id={department.code} value={department.value} label={department.label} onChange={onChange} />))
        }
      </>)
  }

  return (
    <StyledCard>
      <H3>{name}</H3>
      {renderCheckboxes()}
    </StyledCard>)
}

export default Card;