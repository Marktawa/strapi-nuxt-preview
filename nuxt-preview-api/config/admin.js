module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '83a46a46b3514cf11a3c71a107c5924e'),
  },
});
