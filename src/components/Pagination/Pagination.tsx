import React from 'react';
import { Page, PaginationContainer } from './Pagination.style';
import { BiArrowToLeft, BiArrowToRight, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { COLOR } from '../../utils/ui-style';



const Pagination = (): JSX.Element => {
  return (      
    <PaginationContainer>
      <BiArrowToLeft size={24} color={COLOR.SECONDARY} />
      <BiLeftArrowAlt size={24} color={COLOR.SECONDARY} />

      <Page className="active">1</Page>
      <Page>2</Page>
      <Page>3</Page>
      
      <BiRightArrowAlt size={24}  color={COLOR.SECONDARY} />
      <BiArrowToRight size={24} color={COLOR.SECONDARY} />

    </PaginationContainer>
  )
}

export default Pagination;