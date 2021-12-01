import { Card, CardActions, CardContent, Chip } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { FC } from 'react';

export const CandidateCard: FC<{id: string; tag?: string;}> = ({id, tag}) => {
  return (
    <Card variant={'outlined'} sx={{ margin: 1 }}>
      <CardContent>
        <Chip label="v7.2.0" style={{marginBottom: 10}} />
        {tag === 'primary' && (
          <Chip color={'success'} label="Promoted" style={{marginLeft: 10, marginBottom: 10}} />
        )}
        {Number(id) % 2 !== 0 && tag !== 'primary' && (
          <>
            <Chip color={"primary"} label="Queued" style={{marginLeft: 10, marginBottom: 10}} />
          </>
        )}
        {Number(id) % 2 === 0 && tag !== 'primary' && (
          <Chip color={"error"} label="Failed" style={{marginLeft: 10, marginBottom: 10}} />
        )}
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Release Candidate #{id}
        </Typography>
        <Typography variant="h5" component="div">
          ProAssistance
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          🏠 Consumer App | 🇨🇦 Desjardins | 📱 iOS
        </Typography>
        <Typography variant="body2">
          DESJ-569 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          DESJ-432 - Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
