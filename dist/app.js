"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
//Database related stuff
const database = require("./database/database");
//Routers
const medicos_route_1 = require("./routes/medicos.route");
const todos_route_1 = require("./routes/todos.route");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.setupDatabase();
        this.routes();
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(cors());
    }
    // Configure Express middleware.
    setupDatabase() {
        database.connectToServer();
    }
    // Configure API endpoints.
    routes() {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        let router = express.Router();
        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!',
                array: [12, 13, { hola: "mundo v3" }]
            });
        });
        //Aca yo pondria todas las rutas de mi app
        this.express.use('/', router);
        this.express.use('/api/v1/medicos', medicos_route_1.default);
        this.express.use('/api/v1/todos', todos_route_1.default);
    }
}
exports.default = new App().express;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtQ0FBbUM7QUFDbkMsaUNBQWlDO0FBQ2pDLDBDQUEwQztBQUMxQyw2QkFBNkI7QUFFN0Isd0JBQXdCO0FBQ3hCLGdEQUFpRDtBQUlqRCxTQUFTO0FBQ1QsMERBQW1EO0FBQ25ELHNEQUErQztBQUcvQyxrREFBa0Q7QUFDbEQ7SUFLSSxvREFBb0Q7SUFDcEQ7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxnQ0FBZ0M7SUFDeEIsVUFBVTtRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFFN0IsQ0FBQztJQUVELGdDQUFnQztJQUN4QixhQUFhO1FBQ2pCLFFBQVEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUUvQixDQUFDO0lBRUQsMkJBQTJCO0lBQ25CLE1BQU07UUFDVjs7MkJBRW1CO1FBQ25CLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM5Qiw0QkFBNEI7UUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7WUFFM0IsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDTCxPQUFPLEVBQUUsY0FBYztnQkFDdkIsS0FBSyxFQUFDLENBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsQ0FBQzthQUNsQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILDBDQUEwQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsdUJBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxxQkFBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUVKO0FBRUQsa0JBQWUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XHJcbmltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XHJcbmltcG9ydCAqIGFzIGxvZ2dlciBmcm9tICdtb3JnYW4nO1xyXG5pbXBvcnQgKiBhcyBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0ICogYXMgY29ycyBmcm9tICdjb3JzJztcclxuXHJcbi8vRGF0YWJhc2UgcmVsYXRlZCBzdHVmZlxyXG5pbXBvcnQgKiBhcyBkYXRhYmFzZSBmcm9tICBcIi4vZGF0YWJhc2UvZGF0YWJhc2VcIjtcclxuXHJcblxyXG5cclxuLy9Sb3V0ZXJzXHJcbmltcG9ydCBNZWRpY29zUm91dGVyIGZyb20gXCIuL3JvdXRlcy9tZWRpY29zLnJvdXRlXCI7XHJcbmltcG9ydCBUb2Rvc1JvdXRlciBmcm9tIFwiLi9yb3V0ZXMvdG9kb3Mucm91dGVcIjtcclxuXHJcblxyXG4vLyBDcmVhdGVzIGFuZCBjb25maWd1cmVzIGFuIEV4cHJlc3NKUyB3ZWIgc2VydmVyLlxyXG5jbGFzcyBBcHAge1xyXG5cclxuICAgIC8vIHJlZiB0byBFeHByZXNzIGluc3RhbmNlXHJcbiAgICBwdWJsaWMgZXhwcmVzczogZXhwcmVzcy5BcHBsaWNhdGlvbjtcclxuXHJcbiAgICAvL1J1biBjb25maWd1cmF0aW9uIG1ldGhvZHMgb24gdGhlIEV4cHJlc3MgaW5zdGFuY2UuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmV4cHJlc3MgPSBleHByZXNzKCk7XHJcbiAgICAgICAgdGhpcy5taWRkbGV3YXJlKCk7XHJcbiAgICAgICAgdGhpcy5zZXR1cERhdGFiYXNlKCk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb25maWd1cmUgRXhwcmVzcyBtaWRkbGV3YXJlLlxyXG4gICAgcHJpdmF0ZSBtaWRkbGV3YXJlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UobG9nZ2VyKCdkZXYnKSk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzcy51c2UoY29ycygpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZmlndXJlIEV4cHJlc3MgbWlkZGxld2FyZS5cclxuICAgIHByaXZhdGUgc2V0dXBEYXRhYmFzZSgpOiB2b2lkIHtcclxuICAgICAgICBkYXRhYmFzZS5jb25uZWN0VG9TZXJ2ZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29uZmlndXJlIEFQSSBlbmRwb2ludHMuXHJcbiAgICBwcml2YXRlIHJvdXRlcygpOiB2b2lkIHtcclxuICAgICAgICAvKiBUaGlzIGlzIGp1c3QgdG8gZ2V0IHVwIGFuZCBydW5uaW5nLCBhbmQgdG8gbWFrZSBzdXJlIHdoYXQgd2UndmUgZ290IGlzXHJcbiAgICAgICAgICogd29ya2luZyBzbyBmYXIuIFRoaXMgZnVuY3Rpb24gd2lsbCBjaGFuZ2Ugd2hlbiB3ZSBzdGFydCB0byBhZGQgbW9yZVxyXG4gICAgICAgICAqIEFQSSBlbmRwb2ludHMgKi9cclxuICAgICAgICBsZXQgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcclxuICAgICAgICAvLyBwbGFjZWhvbGRlciByb3V0ZSBoYW5kbGVyXHJcbiAgICAgICAgcm91dGVyLmdldCgnLycsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmVzLmpzb24oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0hlbGxvIFdvcmxkIScsXHJcbiAgICAgICAgICAgICAgICBhcnJheTpbMTIsMTMse2hvbGE6XCJtdW5kbyB2M1wifV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy9BY2EgeW8gcG9uZHJpYSB0b2RhcyBsYXMgcnV0YXMgZGUgbWkgYXBwXHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZSgnLycsIHJvdXRlcik7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZSgnL2FwaS92MS9tZWRpY29zJywgTWVkaWNvc1JvdXRlcik7XHJcbiAgICAgICAgdGhpcy5leHByZXNzLnVzZSgnL2FwaS92MS90b2RvcycsIFRvZG9zUm91dGVyKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBcHAoKS5leHByZXNzOyJdLCJzb3VyY2VSb290IjoiIn0=
