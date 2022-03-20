if (!req.cookies.SessionID) {
  res.redirect("/login");
} else {
  sessionId = req.cookies.SessionID;
  connection.beginTransaction(function (err) {
    if (err) {
      throw err;
    }
    connection.query(
      `select * from session_ids where session_id ="${sessionId}"`,
      function (error, row, fields) {
        if (error) {
          return connection.rollback(function () {
            throw error;
          });
        }

        connection.query(
          `select * from users where id=${row[0].user_id}`,
          function (error, user, fields) {
            if (error) {
              return connection.rollback(function () {
                throw error;
              });
            }

            connection.commit(function (err) {
              if (err) {
                return connection.rollback(function () {
                  throw err;
                });
              }
              res.render("index", { user: user });
            });
          }
        );
      }
    );
  });
}
