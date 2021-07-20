import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, FC } from "react";
import { useDispatch, connect } from "react-redux";
import { dataListCases } from './../actions/index';

interface Store {
  dataState?: {
    list: {
      "country": string,
      "province": string[],
      "timeline": {
          "cases": {
            [key: string]: string
          },
          "deaths": {
            [key: string]: string
          },
          "recovered": {
            [key: string]: string
          }
      }
    }
  }
}

interface Tabela {
  list: any
}

const Tabela:FC<Tabela> = ({list}) => {
  const dispatch = useDispatch()
  const keys =  Object.keys(list?.timeline?.cases || {});

  const rows:any = [];
  keys.forEach(key => {
     rows.push([
       key,
       list.timeline?.cases[key],
       list.timeline?.deaths[key],
       list.timeline?.recovered[key]
     ])
  }) 

  useEffect(() => {
    dispatch(dataListCases())

  }, [])

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Casos</TableCell>
            <TableCell>Mortes</TableCell>
            <TableCell>Recuperados</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow>
                {row.map((rowItem: any) => (
                  <TableCell>{rowItem}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table> 
      </TableContainer>
   </div>
  )
} 

const mapStateToProps = (state: Store) => ({
    list: state.dataState?.list
})

export default connect(mapStateToProps) (Tabela)