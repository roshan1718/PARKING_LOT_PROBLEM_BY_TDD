// Importing 'chai' library and 'Main Class' in code
import {expect} from 'chai';
let sinon = require('sinon');
let parkingLotMain = require('../app/parking-lot/parking-lot.component');
let owner = require('./ParkingLotOwner');
let car;
let parking =[];
//Test Cases For Parking Lot System
describe(`Test Cases For Parking Lot System`, () =>
{
    // Run Before Each Test Execution
    beforeEach(()=>{
        car = new Object();
        parking =[];
        let checkParkingFull=sinon.stub(owner,'checkParkingFull');
    })
    afterEach(()=>{
        owner.checkParkingFull.restore();
    })
    // Test For Add Vehicle in Parking Lot
    it(`given car object when car is parked should return true`, () =>
    {
        parkingLotMain.isParked(parking,car,function(result){
        expect(result).to.equal(true);
        });
    })
    // Test For Possiblities To Add Vehicle in Parking Lot
    it(`given car object when invalid and car is not parked should return exception`, () =>
    {
        try{
            parkingLotMain.isParked(parking,null,function(result){
            expect(result).to.equal(true);
            });
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Unpark Car from parking Lot
    it(`given car object when car is unpark then return true`, () =>{
        parkingLotMain.isParked(parking,car,function(result){
            let carParkedOrNot= parkingLotMain.isUnparked(car);
            expect(carParkedOrNot).to.equal(true);
        })   
    })
    // Test For Possiblities To Remove Vehicle from Parking Lot
    it(`given car object when invalid or car can't unparked should return exception`, () =>
    {
        try{
            parkingLotMain.isParked(parking,undefined,function(result){
                let carParkedOrNot= parkingLotMain.isUnparked(undefined);
                expect(carParkedOrNot).to.equal(true);
            })
        }catch(e){
            console.log(e.message);
        }
    })
    // Test For Check The Parking Lot Is Full
    it(`given car object when park if parking full should return parking full`, ()=>{
        let carParkObject = sinon.spy()
        try{
            parkingLotMain.isParked(parking,carParkObject,function(result){
                parkingLotMain.isParked(parking,carParkObject,function(result){
                    parkingLotMain.isParked(parking,carParkObject,function(result){
                        expect(result).to.equal(true);
                    })
                    expect(result).to.equal(true);
                })
                expect(result).to.equal(true);
            })
            }catch(e){
                console.log(e.message)
            }
    })
})