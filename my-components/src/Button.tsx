import React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
    /**Provide a text for the button */
    children:ReactNode;

    /**Which variant look would you like use */
    variant: 'primary' |'secondary';
    }

    /**This is a special button !!! */
export const Button = ({children,variant='primary', ...props}: Props) => {
  return (
    <button {...props} 
    style={{background:variant === 'primary' ? 'blue' :'grey',
        color:'white',
        border:'none',
        borderRadius:100,
        padding:10,
    }}>
        {children}
    </button>
  )
}