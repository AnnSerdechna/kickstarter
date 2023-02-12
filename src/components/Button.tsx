import {FC, ComponentPropsWithoutRef} from 'react'
import classNames from 'classnames'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  text: string
  styleType?: 'default' | 'accent' | 'tab'
}

const Button: FC<ButtonProps> = (
  {
    text,
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
    )}
    type={type}
    {...props}
  >
    {text}
  </button>
)

export { Button }
