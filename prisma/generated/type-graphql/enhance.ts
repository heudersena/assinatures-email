import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Assinature_email: crudResolvers.Assinature_emailCrudResolver,
  Pinctures: crudResolvers.PincturesCrudResolver
};
const actionResolversMap = {
  Assinature_email: {
    aggregateAssinature_email: actionResolvers.AggregateAssinature_emailResolver,
    createManyAssinature_email: actionResolvers.CreateManyAssinature_emailResolver,
    createOneAssinature_email: actionResolvers.CreateOneAssinature_emailResolver,
    deleteManyAssinature_email: actionResolvers.DeleteManyAssinature_emailResolver,
    deleteOneAssinature_email: actionResolvers.DeleteOneAssinature_emailResolver,
    findFirstAssinature_email: actionResolvers.FindFirstAssinature_emailResolver,
    assinature_emails: actionResolvers.FindManyAssinature_emailResolver,
    assinature_email: actionResolvers.FindUniqueAssinature_emailResolver,
    groupByAssinature_email: actionResolvers.GroupByAssinature_emailResolver,
    updateManyAssinature_email: actionResolvers.UpdateManyAssinature_emailResolver,
    updateOneAssinature_email: actionResolvers.UpdateOneAssinature_emailResolver,
    upsertOneAssinature_email: actionResolvers.UpsertOneAssinature_emailResolver
  },
  Pinctures: {
    aggregatePinctures: actionResolvers.AggregatePincturesResolver,
    createManyPinctures: actionResolvers.CreateManyPincturesResolver,
    createOnePinctures: actionResolvers.CreateOnePincturesResolver,
    deleteManyPinctures: actionResolvers.DeleteManyPincturesResolver,
    deleteOnePinctures: actionResolvers.DeleteOnePincturesResolver,
    findFirstPinctures: actionResolvers.FindFirstPincturesResolver,
    findManyPinctures: actionResolvers.FindManyPincturesResolver,
    findUniquePinctures: actionResolvers.FindUniquePincturesResolver,
    groupByPinctures: actionResolvers.GroupByPincturesResolver,
    updateManyPinctures: actionResolvers.UpdateManyPincturesResolver,
    updateOnePinctures: actionResolvers.UpdateOnePincturesResolver,
    upsertOnePinctures: actionResolvers.UpsertOnePincturesResolver
  }
};
const crudResolversInfo = {
  Assinature_email: ["aggregateAssinature_email", "createManyAssinature_email", "createOneAssinature_email", "deleteManyAssinature_email", "deleteOneAssinature_email", "findFirstAssinature_email", "assinature_emails", "assinature_email", "groupByAssinature_email", "updateManyAssinature_email", "updateOneAssinature_email", "upsertOneAssinature_email"],
  Pinctures: ["aggregatePinctures", "createManyPinctures", "createOnePinctures", "deleteManyPinctures", "deleteOnePinctures", "findFirstPinctures", "findManyPinctures", "findUniquePinctures", "groupByPinctures", "updateManyPinctures", "updateOnePinctures", "upsertOnePinctures"]
};
const argsInfo = {
  AggregateAssinature_emailArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAssinature_emailArgs: ["data", "skipDuplicates"],
  CreateOneAssinature_emailArgs: ["data"],
  DeleteManyAssinature_emailArgs: ["where"],
  DeleteOneAssinature_emailArgs: ["where"],
  FindFirstAssinature_emailArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAssinature_emailArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAssinature_emailArgs: ["where"],
  GroupByAssinature_emailArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAssinature_emailArgs: ["data", "where"],
  UpdateOneAssinature_emailArgs: ["data", "where"],
  UpsertOneAssinature_emailArgs: ["where", "create", "update"],
  AggregatePincturesArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPincturesArgs: ["data", "skipDuplicates"],
  CreateOnePincturesArgs: ["data"],
  DeleteManyPincturesArgs: ["where"],
  DeleteOnePincturesArgs: ["where"],
  FindFirstPincturesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPincturesArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePincturesArgs: ["where"],
  GroupByPincturesArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPincturesArgs: ["data", "where"],
  UpdateOnePincturesArgs: ["data", "where"],
  UpsertOnePincturesArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
        tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Assinature_email: relationResolvers.Assinature_emailRelationsResolver,
  Pinctures: relationResolvers.PincturesRelationsResolver
};
const relationResolversInfo = {
  Assinature_email: ["pinctures"],
  Pinctures: ["assinatureId"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        tslib.__decorate(allActionsDecorators, relationResolverTarget, relationResolverActionName, null);
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Assinature_email: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  Pinctures: ["id", "path", "assinature_emailId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateAssinature_email: ["_count", "_min", "_max"],
  Assinature_emailGroupBy: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "_count", "_min", "_max"],
  AggregatePinctures: ["_count", "_min", "_max"],
  PincturesGroupBy: ["id", "path", "assinature_emailId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  Assinature_emailCount: ["pinctures"],
  Assinature_emailCountAggregate: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "_all"],
  Assinature_emailMinAggregate: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  Assinature_emailMaxAggregate: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  PincturesCountAggregate: ["id", "path", "assinature_emailId", "_all"],
  PincturesMinAggregate: ["id", "path", "assinature_emailId"],
  PincturesMaxAggregate: ["id", "path", "assinature_emailId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  Assinature_emailWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "pinctures"],
  Assinature_emailOrderByWithRelationInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "pinctures"],
  Assinature_emailWhereUniqueInput: ["id"],
  Assinature_emailOrderByWithAggregationInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "_count", "_max", "_min"],
  Assinature_emailScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  PincturesWhereInput: ["AND", "OR", "NOT", "id", "path", "assinatureId", "assinature_emailId"],
  PincturesOrderByWithRelationInput: ["id", "path", "assinatureId", "assinature_emailId"],
  PincturesWhereUniqueInput: ["id"],
  PincturesOrderByWithAggregationInput: ["id", "path", "assinature_emailId", "_count", "_max", "_min"],
  PincturesScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "path", "assinature_emailId"],
  Assinature_emailCreateInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "pinctures"],
  Assinature_emailUpdateInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at", "pinctures"],
  Assinature_emailCreateManyInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  Assinature_emailUpdateManyMutationInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  PincturesCreateInput: ["id", "path", "assinatureId"],
  PincturesUpdateInput: ["id", "path", "assinatureId"],
  PincturesCreateManyInput: ["id", "path", "assinature_emailId"],
  PincturesUpdateManyMutationInput: ["id", "path"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PincturesListRelationFilter: ["every", "some", "none"],
  PincturesOrderByRelationAggregateInput: ["_count"],
  Assinature_emailCountOrderByAggregateInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  Assinature_emailMaxOrderByAggregateInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  Assinature_emailMinOrderByAggregateInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  Assinature_emailRelationFilter: ["is", "isNot"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  PincturesCountOrderByAggregateInput: ["id", "path", "assinature_emailId"],
  PincturesMaxOrderByAggregateInput: ["id", "path", "assinature_emailId"],
  PincturesMinOrderByAggregateInput: ["id", "path", "assinature_emailId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  PincturesCreateNestedManyWithoutAssinatureIdInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PincturesUpdateManyWithoutAssinatureIdNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  Assinature_emailCreateNestedOneWithoutPincturesInput: ["create", "connectOrCreate", "connect"],
  Assinature_emailUpdateOneWithoutPincturesNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PincturesCreateWithoutAssinatureIdInput: ["id", "path"],
  PincturesCreateOrConnectWithoutAssinatureIdInput: ["where", "create"],
  PincturesCreateManyAssinatureIdInputEnvelope: ["data", "skipDuplicates"],
  PincturesUpsertWithWhereUniqueWithoutAssinatureIdInput: ["where", "update", "create"],
  PincturesUpdateWithWhereUniqueWithoutAssinatureIdInput: ["where", "data"],
  PincturesUpdateManyWithWhereWithoutAssinatureIdInput: ["where", "data"],
  PincturesScalarWhereInput: ["AND", "OR", "NOT", "id", "path", "assinature_emailId"],
  Assinature_emailCreateWithoutPincturesInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  Assinature_emailCreateOrConnectWithoutPincturesInput: ["where", "create"],
  Assinature_emailUpsertWithoutPincturesInput: ["update", "create"],
  Assinature_emailUpdateWithoutPincturesInput: ["id", "name", "email", "password", "alreadyupdated", "created_at", "updated_at"],
  PincturesCreateManyAssinatureIdInput: ["id", "path"],
  PincturesUpdateWithoutAssinatureIdInput: ["id", "path"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

