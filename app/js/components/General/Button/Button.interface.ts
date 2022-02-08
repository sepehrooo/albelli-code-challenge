export interface Button {
    type?: 'button' | 'submit'
    className?: string
    children: JSX.Element | JSX.Element[] | string | string[]
}
