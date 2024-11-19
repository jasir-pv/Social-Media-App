import React, { useEffect, useState } from 'react';
import { Container, Grid, Grow, Paper, AppBar, TextField, Button, Box, Chip } from '@mui/material';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import { useDispatch } from 'react-redux';
import { getPostBySearch, getPosts } from '../actions/posts';
import Paginate from './Pagination';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState(''); // State for the general search bar
  const [tags, setTags] = useState([]);    // State for tags array
  const [tagInput, setTagInput] = useState(''); // State for the tags input field
  const [currentId, setCurrentId] = useState(null);

  // Fetch posts on component mount
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none' } &tags={tags.join(',')}`)
    }else{
      navigate('/')
    }
  };

  const handleAdd = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      setTags([...tags, tagInput.trim()]);
      setTagInput(''); // Clear input after adding
    }
  };

  const handleDelete = (tagToDelete) =>
    setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} md={9}>
            <Posts currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {/* Search Bar */}
            <AppBar
              position="static"
              color="inherit"
              sx={{
                borderRadius: 4,
                marginBottom: '1rem',
                display: 'flex',
                padding: 2,
              }}
            >
              <TextField
                name="search"
                variant="outlined"
                label="Search Your Blogs"
                fullWidth
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)} // Updates the search input
              />
              <TextField
                variant="outlined"
                label="Search by tags"
                placeholder="Enter tag and press Enter"
                fullWidth
                value={tagInput} // Separate state for the tags input field
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAdd}
                sx={{ marginTop: 2 }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1,
                  margin: '10px 0',
                }}
              >
                {tags.map((tag, index) => (
                  <Chip
                    key={index}
                    label={tag}
                    onDelete={() => handleDelete(tag)}
                    color="primary"
                    variant="outlined"
                  />
                ))}
              </Box>
              <Button onClick={searchPost} variant="contained" color="primary">
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Paginate page={page}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
