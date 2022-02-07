export interface Button {
    type?: 'button' | 'submit' | 'reset'
    className?: string
    children: JSX.Element | string
}
