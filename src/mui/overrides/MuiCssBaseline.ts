export default {
  html: {
    height: '100%'
  },
  body: {
    height: '100%',
    display: 'flex',
    '& #root': {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflowX: 'hidden'
    }
  }
};
