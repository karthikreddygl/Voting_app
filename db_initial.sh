mongo  127.0.0.1/votedb --eval 'db.votemodels.remove({TDP : 0, BJP : 0,YCP : 0,CON : 0});'
mongo  127.0.0.1/votedb --eval 'var document = { REF : "Ref", TDP : 0, BJP : 0,YCP : 0,CON : 0 }; db.votemodels.insert(document);'