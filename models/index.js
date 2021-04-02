const Category = require('./Category');
const Count = require('./Count');
const Date = require('./Date');
const Item = require('./Item');
const Location = require('./Location');
const Note = require('./Note');
const User = require('./User');
const UserAuditLog = require('./UserAuditLog');

Item.hasMany(Category, {
  foreignKey: 'item_id'
});

Item.hasMany(Count, {
  foreignKey: 'item_id'
});

Item.hasMany(Date, {
  foreignKey: 'item_id'
});

Item.hasMany(Location, {
  foreignKey: 'item_id'
});

Item.hasMany(Note, {
  foreignKey: 'item_id'
});

User.hasMany(UserAuditLog, {
  foreignKey: 'user_id',
});

User.hasMany(Category, {
  foreignKey: 'user_id',
});

User.hasMany(Count, {
  foreignKey: 'user_id',
});

User.hasMany(Date, {
  foreignKey: 'user_id',
});

User.hasMany(Item, {
  foreignKey: 'user_id',
});

User.hasMany(Location, {
  foreignKey: 'user_id',
});

User.hasMany(Note, {
  foreignKey: 'user_id',
});

UserAuditLog.belongsTo(User, {
  foreignKey: 'user_id',
});

Category.belongsTo(Item, {
  foreignKey: 'item_id',
});

Count.belongsTo(Item, {
  foreignKey: 'item_id',
});

Date.belongsTo(Item, {
  foreignKey: 'item_id',
});

Location.belongsTo(Item, {
  foreignKey: 'item_id',
});

Note.belongsTo(Item, {
  foreignKey: 'item_id',
});

Category.belongsTo(User, {
  foreignKey: 'user_id',
});

Count.belongsTo(User, {
  foreignKey: 'user_id',
});

Date.belongsTo(User, {
  foreignKey: 'user_id',
});

Item.belongsTo(User, {
  foreignKey: 'user_id',
});

Location.belongsTo(User, {
  foreignKey: 'user_id',
});

Note.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Category, Count, Date, Item, Location, Note, User, UserAuditLog };
