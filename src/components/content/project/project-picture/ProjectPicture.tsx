import './ProjectPicture.scss';
import { Box, Modal, SxProps } from '@mui/material';
import { memo, useState } from 'react';
import classNames from 'classnames';
import PictureChangeButtons from './picture-change-buttons/PictureChangeButtons';

interface ProjectPictureProps {
  imageSrc: string[];
  name: string;
  sx?: SxProps;
}

const ProjectPicture = ({ imageSrc, name, sx }: ProjectPictureProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Box sx={sx} component="section" className="project-picture-container">
        <img
          className="project-picture"
          src={imageSrc[imageIndex]}
          alt={name}
          loading="lazy"
          onClick={() => setIsModalOpen(true)}
        />
        <PictureChangeButtons
          onChange={setImageIndex}
          currentIndex={imageIndex}
          className="image-change-buttons"
          picturesCount={imageSrc.length}
        />
      </Box>

      {isModalOpen && (
        <Modal
          className={classNames('project-picture-container', 'modal')}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}>
          <>
            <img
              className="project-picture"
              src={imageSrc[imageIndex]}
              alt={name}
              onClick={() => setIsModalOpen(false)}
            />
            <PictureChangeButtons
              onChange={setImageIndex}
              currentIndex={imageIndex}
              className="image-change-buttons"
              picturesCount={imageSrc.length}
            />
          </>
        </Modal>
      )}
    </>
  );
};

export default memo(ProjectPicture);
