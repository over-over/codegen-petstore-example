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

  &::before {
    display: block;
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.palette.primary.light};
    width: 100%;
    height: 100%;
  }
  &::after {
    display: block;
    padding: 16px;
    position: absolute;
    content: 'Failed to load image ' attr(alt);
    text-align: center;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
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
