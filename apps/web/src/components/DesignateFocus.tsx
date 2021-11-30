import { FC } from 'react';
import {
  Checkbox,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';

export const DesignateFocus: FC<any> = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <>
            <ListItem
              key={value}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => {}} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={true}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText secondary={"d240853866f20fc3e536cb3bca86c86c54b723ce"} id={labelId} primary={`DESJ-324 - Sed ut perspiciatis unde omnis iste natus `} />
              </ListItemButton>
            </ListItem>
            <Divider component="li" />
          </>
        );
      })}
    </List>
  )
}
