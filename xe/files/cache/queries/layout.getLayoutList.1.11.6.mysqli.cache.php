<?php if(!defined('__XE__')) exit();
$query = new Query();
$query->setQueryId("getLayoutList");
$query->setAction("select");
$query->setPriority("");

${'site_srl13_argument'} = new ConditionArgument('site_srl', $args->site_srl, 'equal');
${'site_srl13_argument'}->checkFilter('number');
${'site_srl13_argument'}->ensureDefaultValue('0');
${'site_srl13_argument'}->checkNotNull();
${'site_srl13_argument'}->createConditionValue();
if(!${'site_srl13_argument'}->isValid()) return ${'site_srl13_argument'}->getErrorMessage();
if(${'site_srl13_argument'} !== null) ${'site_srl13_argument'}->setColumnType('number');

${'layout_type14_argument'} = new ConditionArgument('layout_type', $args->layout_type, 'equal');
${'layout_type14_argument'}->ensureDefaultValue('P');
${'layout_type14_argument'}->createConditionValue();
if(!${'layout_type14_argument'}->isValid()) return ${'layout_type14_argument'}->getErrorMessage();
if(${'layout_type14_argument'} !== null) ${'layout_type14_argument'}->setColumnType('char');
if(isset($args->layout)) {
${'layout15_argument'} = new ConditionArgument('layout', $args->layout, 'equal');
${'layout15_argument'}->createConditionValue();
if(!${'layout15_argument'}->isValid()) return ${'layout15_argument'}->getErrorMessage();
} else
${'layout15_argument'} = NULL;if(${'layout15_argument'} !== null) ${'layout15_argument'}->setColumnType('varchar');

${'sort_index16_argument'} = new Argument('sort_index', $args->{'sort_index'});
${'sort_index16_argument'}->ensureDefaultValue('layout_srl');
if(!${'sort_index16_argument'}->isValid()) return ${'sort_index16_argument'}->getErrorMessage();

$query->setColumns(array(
new StarExpression()
));
$query->setTables(array(
new Table('`xe_layouts`', '`layouts`')
));
$query->setConditions(array(
new ConditionGroup(array(
new ConditionWithArgument('`site_srl`',$site_srl13_argument,"equal")
,new ConditionWithArgument('`layout_type`',$layout_type14_argument,"equal", 'and')
,new ConditionWithArgument('`layout`',$layout15_argument,"equal", 'and')))
));
$query->setGroups(array());
$query->setOrder(array(
new OrderByColumn(${'sort_index16_argument'}, "desc")
));
$query->setLimit();
return $query; ?>