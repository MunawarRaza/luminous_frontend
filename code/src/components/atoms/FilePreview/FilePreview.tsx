import { FilePreviewProps } from './FilePreview.interfaces'
import styles from './FilePreview.module.css'

function FilePreview({ fileUrl }: FilePreviewProps) {
  return (
    <div className={styles.FilePreview}>
      {fileUrl && <iframe src={fileUrl} data-testid="file-preview" title="file-preview" width="100%" height={800} />}
    </div>
  )
}

export default FilePreview
