const expect = require('chai').expect;
const {set, sync, add, mult} = require('../sync')


describe ('sync', ()=>{
    it('should exist', ()=>{
        expect(sync).to.be.ok;
    });

    it('should execute 2 operations',()=>{
        expect(sync('set 1 | add 1')).to.eql(2);
    });
    it('should execute 3 operations',()=>{
        expect(sync('set 3 | add 4 | mult 100')).to.eql(700);
    });

})





describe ('set', ()=>{
    it('should set a value', ()=>{
        expect(set(1)).to.eql(1);
    })
})




describe ('add',()=>{
    it('should add', ()=>{
        expect(add(1, 1)).to.eql(2);
    })
})


describe ('mult',()=>{
    it('should multiply', ()=>{
        expect(add(2, 2)).to.eql(4);
    })
})
