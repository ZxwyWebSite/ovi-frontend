import { useLocation } from 'react-router-dom'
import { getBaseUrl } from '../../utils/getBaseUrl'
import { getStoredToken } from '../../utils/protectedRouteHandler'
import DownloadButtonGroup from '../DownloadBtnGtoup'
import { DownloadBtnContainer } from './Containers'

const PDFEmbedPreview: React.FC<{ file: any }> = ({ file }) => {
  const location = useLocation()
  const asPath = location.pathname + location.search
  const hashedToken = getStoredToken(asPath)

  const pdfPath = encodeURIComponent(
    `${getBaseUrl()}/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`
  )
  const url = `https://mozilla.github.io/pdf.js/web/viewer.html?file=${pdfPath}`

  return (
    <div>
      <div className="w-full overflow-hidden rounded" style={{ height: '90vh' }}>
        <iframe src={url} frameBorder="0" width="100%" height="100%" title='preview'></iframe>
      </div>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
    </div>
  )
}

export default PDFEmbedPreview
