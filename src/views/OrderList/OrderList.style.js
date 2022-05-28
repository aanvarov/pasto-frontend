import styled from 'styled-components'
import {COLORS} from '../../constants'

export const StyledOrderList = styled.div`
margin: 0px;
.ant-table-thead > tr > th {
    background-color: ${COLORS.main};
    color: ${COLORS.white};
}
`