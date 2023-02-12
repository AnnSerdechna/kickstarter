import {FC, ComponentPropsWithoutRef, ReactNode} from 'react'
import classNames from 'classnames'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text?: string
  styleType?: 'default' | 'accent' | 'tab'
  icon?: ReactNode
}

const Button: FC<ButtonProps> = (
  {
    text,
    icon,
    type = 'button',
    styleType = 'default',
    ...props
  }) => (
  <button
    className={classNames(
      'px-10 py-4 text-sm text-white font-bold font-primary rounded uppercase hover:opacity-90 transition-opacity ease-linear delay-100 disabled:text-disabled',
      {'bg-black': styleType === 'default'},
      {'bg-accent': styleType === 'accent'},
      {'text-black': styleType === 'tab'},
      {'bg-transparent px-2 py-h': !!icon},
    )}
    type={type}
    {...props}
  >
    {text}
    {icon}
  </button>
)

export { Button }
