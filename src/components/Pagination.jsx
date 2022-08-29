// PAGINATION COMPONENT

import React from 'react'

//bootstrap imports
import Button from 'react-bootstrap/Button'

const Pagination = ({page, totPages, onChangePage}) => {
  return (
      <div className="d-flex align-items-center justify-content-between">
          
          <Button 
            variant='dark'
            disabled={page -1 === 0}
            onClick={() => onChangePage({page: Number(page) - 1}) }
          >Previos</Button>

          <span>{page}/{totPages}</span>

          <Button 
            variant='dark'
            disabled={page >= totPages }
            onClick={() => onChangePage({page: Number(page) + 1}) }
          >Next</Button>
      </div>
  )
}

export default Pagination