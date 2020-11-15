const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://homework8:dbhw8@cluster0.z2vdt.mongodb.net/homework8?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);
