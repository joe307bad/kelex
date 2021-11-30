import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeView from '@mui/lab/TreeView';
import { BuildStepper } from '../components/BuildStepper';
import { Box, Card, CardActions, CardContent } from '@mui/material';
import { TreeItem } from '@mui/lab';
import { CandidateCard } from '../components/CandidateCard';

export function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kelex
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          height: `calc(100% - 100px)`
        }}
      >
        <Box  sx={{width: '20%'}} style={{backgroundColor: 'white', justifyContent: 'flex-end', display: 'flex'}}>
          <Box style={{width: '100%'}}>
            <BuildStepper />
          </Box>
        </Box>
        <Box sx={{width: '15%', overflowY: 'scroll', maxHeight: '100%'}} style={{backgroundColor: 'white'}}>
            {Array.from(Array(5)).map((v, i) => (
              <CandidateCard id={i.toString()} key={i} />
            ))}
        </Box>
        <Box sx={{width: '20%'}} style={{backgroundColor: 'white'}}>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240 }}
          >
            <TreeItem nodeId="1" label="v7.2.0">
              <TreeItem nodeId="2" label="v7.2.1" />
            </TreeItem>
            <TreeItem nodeId="5" label="v7.3.0" />
          </TreeView>
        </Box>
      </Box>
    </>
  );
}

export default App;
