export interface FileUploadButtonProps {
    children: JSX.Element | string
    onFileSelect: (file: File) => void
}
