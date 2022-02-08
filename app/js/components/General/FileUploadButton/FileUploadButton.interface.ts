export interface FileUploadButtonProps {
    children: JSX.Element | JSX.Element[] | string | string[]
    onFileSelect: (file: File) => void
}
