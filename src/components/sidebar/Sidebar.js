import React from 'react'
import styled from 'styled-components'
import User from '../user/User'

const Aside = styled.aside`
     width: 80px;
     background: rgba(32, 32, 35, 1);
     height: 100%;
     border-right: 1px solid rgba(189, 189, 192, 0.1);
     transition: width 0.3s;
     overflow-y: scroll;

     @media(min-width: 576px) {
          width: 320px;
     }
`

const Sidebar = ({ contacts }) => (
     <Aside>
          {contacts.map(contact => <User user={contact} key={contact.user_id } /> )}
     </Aside>
)

export default Sidebar