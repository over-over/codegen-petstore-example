import { LoadingButton } from '@mui/lab';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

import { TPetDetails } from './types';

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
      <CardMedia component="img" height="140" image={photoURL} alt={name} />
      <CardContent>
        <Typography variant="overline" color="text.secondary">
          {id}
        </Typography>
        <Typography gutterBottom variant="h5">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Category: "{category}", Status: "{status}"
        </Typography>
        {tags.length > 0 ? (
          <Typography variant="subtitle2" color="text.secondary">
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
