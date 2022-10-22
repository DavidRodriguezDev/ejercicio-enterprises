const express = require('express'); //Requerir express
const dotenv = require('dotenv'); //Requirir dotenv
const PORT = process.env.PORT || 9000;
const routerEnterprises = require('./src/api/routes/enterprises.routes');
const routerTvs = require('./src/api/routes/tvs.routes');
const routerMobiles = require('./src/api/routes/mobiles.routes');
const userRouter = require('./src/api/routes/users.routes');
const {isAuth} = require('./src/middlewares/auth')

const {connect} = require('./src/utils/database'); //Importamos la conexión con la BBDD

connect(); //Conectamos después de iniciar el servidor con la BBDD
dotenv.config();
const app = express(); //Iniciamos el servidor con express

app.use(express.json()); //Necesario para poder usar json a la hora de enviar datos como puede ser con el método POST.
app.use(express.urlencoded({ extended : false }));

app.use('/enterprises', [isAuth], routerEnterprises); //Para la ruta '/enterprises', utiliza este router(routerEnterprises), que hemos creado en routes/enterprise.routes.js donde hemos creado funciones para los diferentes métodos GET POST PUT DELETE
app.use('/tvs', routerTvs);
app.use('/mobiles', routerMobiles); 
app.use('/users', userRouter);  //Esta no se securiza porque para acceder a loguearte no estás autenticado.
app.listen(PORT, () => console.log(`listening on port: http://localhost:${PORT}`));
