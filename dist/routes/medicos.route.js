"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const database = require("../database/database");
const MEDICOS = [];
class MedicosRouter {
    /**
     * Initialize the MedicosRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Medicos.
     */
    getAll(req, res, next) {
        database.getDB().collection('medicos').find({}).toArray((err, medicos) => {
            if (err)
                throw err;
            res.json(medicos);
        });
    }
    /**
     * GET all Medicos.
     */
    createOne(req, res, next) {
        database.getDB().collection('medicos').insert(req.body, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result.ops[0]);
        });
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
        this.router.post('/', this.createOne);
    }
}
exports.MedicosRouter = MedicosRouter;
// Create the HeroRouter, and export its configured Express.Router
const medicosRouter = new MedicosRouter();
medicosRouter.init();
exports.default = medicosRouter.router;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yb3V0ZXMvbWVkaWNvcy5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFnRTtBQUNoRSxpREFBaUQ7QUFDakQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDO0FBRW5CO0lBR0U7O09BRUc7SUFDSDtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1FBQzNELFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBQyxPQUFPO1lBQ2xFLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQztnQkFDTCxNQUFNLEdBQUcsQ0FBQztZQUNaLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxTQUFTLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjtRQUM5RCxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFDLENBQUMsR0FBRyxFQUFDLE1BQU07WUFDOUQsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFDSixNQUFNLEdBQUcsQ0FBQztZQUNkLENBQUM7WUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRXhDLENBQUM7Q0FFRjtBQTlDRCxzQ0E4Q0M7QUFFRCxrRUFBa0U7QUFDbEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztBQUMxQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFckIsa0JBQWUsYUFBYSxDQUFDLE1BQU0sQ0FBQyIsImZpbGUiOiJyb3V0ZXMvbWVkaWNvcy5yb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVyLCBSZXF1ZXN0LCBSZXNwb25zZSwgTmV4dEZ1bmN0aW9ufSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSBcIi4uL2RhdGFiYXNlL2RhdGFiYXNlXCI7XHJcbmNvbnN0IE1FRElDT1MgPSBbXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNZWRpY29zUm91dGVyIHtcclxuICByb3V0ZXI6IFJvdXRlclxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWFsaXplIHRoZSBNZWRpY29zUm91dGVyXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHRVQgYWxsIE1lZGljb3MuXHJcbiAgICovXHJcbiAgcHVibGljIGdldEFsbChyZXE6IFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xyXG4gICAgZGF0YWJhc2UuZ2V0REIoKS5jb2xsZWN0aW9uKCdtZWRpY29zJykuZmluZCh7fSkudG9BcnJheSgoZXJyLG1lZGljb3MpPT57XHJcbiAgICAgIGlmKGVycilcclxuICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgIHJlcy5qc29uKG1lZGljb3MpO1xyXG4gICAgfSk7ICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR0VUIGFsbCBNZWRpY29zLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBjcmVhdGVPbmUocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pIHtcclxuICAgIGRhdGFiYXNlLmdldERCKCkuY29sbGVjdGlvbignbWVkaWNvcycpLmluc2VydChyZXEuYm9keSwoZXJyLHJlc3VsdCk9PntcclxuICAgICAgICBpZihlcnIpe1xyXG4gICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcy5zZW5kKHJlc3VsdC5vcHNbMF0pO1xyXG4gICAgfSk7ICBcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGFrZSBlYWNoIGhhbmRsZXIsIGFuZCBhdHRhY2ggdG8gb25lIG9mIHRoZSBFeHByZXNzLlJvdXRlcidzXHJcbiAgICogZW5kcG9pbnRzLlxyXG4gICAqL1xyXG4gIGluaXQoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5nZXQoJy8nLCB0aGlzLmdldEFsbCk7XHJcbiAgICB0aGlzLnJvdXRlci5wb3N0KCcvJywgdGhpcy5jcmVhdGVPbmUpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLy8gQ3JlYXRlIHRoZSBIZXJvUm91dGVyLCBhbmQgZXhwb3J0IGl0cyBjb25maWd1cmVkIEV4cHJlc3MuUm91dGVyXHJcbmNvbnN0IG1lZGljb3NSb3V0ZXIgPSBuZXcgTWVkaWNvc1JvdXRlcigpO1xyXG5tZWRpY29zUm91dGVyLmluaXQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lZGljb3NSb3V0ZXIucm91dGVyOyJdLCJzb3VyY2VSb290IjoiLi4ifQ==
