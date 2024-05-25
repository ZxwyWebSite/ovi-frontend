import type { OdFileObject } from '../../types'

import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { PreviewContainer, DownloadBtnContainer } from './Containers'
import DownloadButtonGroup from '../DownloadBtnGtoup'
import { getStoredToken } from '../../utils/protectedRouteHandler'

const ImagePreview: FC<{ file: OdFileObject }> = ({ file }) => {
  const location = useLocation()
  const asPath = location.pathname + location.search
  const hashedToken = getStoredToken(asPath)

  return (
    <>
      <PreviewContainer>
        {/* eslint-disable-next-line */}
        <img
          className="mx-auto"
          src={`/api/raw/?path=${asPath}${hashedToken ? `&odpt=${hashedToken}` : ''}`}
          alt={file.name}
          width={file.image?.width}
          height={file.image?.height}
        />
      </PreviewContainer>
      <DownloadBtnContainer>
        <DownloadButtonGroup />
      </DownloadBtnContainer>
    </>
  )
}

export default ImagePreview
