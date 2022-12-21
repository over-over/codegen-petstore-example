import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

import { TPetDetails } from './types';

const CardImage = styled(CardMedia)`
  position: relative;
  color: ${({ theme }) => theme.palette.primary.dark};
  background-color: ${({ theme }) => theme.palette.primary.light};

  &::after {
    position: absolute;
    content: 'Failed to load image for ' attr(alt);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
` as typeof CardMedia;

type Props = TPetDetails & {
  isDeleting?: boolean;
  onDelete: () => void;
};

export const PetDetailsCard = ({
  id,
  name,
  photoURL,
  category,
  status,
  tags,
  isDeleting,
  onDelete,
}: Props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardImage component="img" height="180" image={photoURL} alt={name} />
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          ID: {id}
        </Typography>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Category: "{category}", Status: "{status}"
        </Typography>
        {tags.length > 0 ? (
          <Typography variant="subtitle2" color="text.disabled">
            Tags: {tags.join(', ')}
          </Typography>
        ) : null}
      </CardContent>
      <CardActions>
        <LoadingButton
          loading={isDeleting}
          onClick={onDelete}
          color="error"
          size="large"
          variant="contained"
          disableElevation
        >
          Delete pet
        </LoadingButton>
      </CardActions>
    </Card>
  );
};
