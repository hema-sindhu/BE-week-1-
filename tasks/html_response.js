app.use(express.static('public'));
app.get('/route', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const port = process.env.PORT || 3000;