import { serializable,deserialize, serialize,object,primitive, createModelSchema, list   } from 'serializr';

export class CurrentCountry {
    @serializable(primitive()) label;
    @serializable(primitive()) value;
    @serializable(primitive()) preferredCurrency;
}

export class CurrentCurency {
    @serializable(primitive()) label;
    @serializable(primitive()) value;
}

export class PreferredCurrency {
    @serializable(primitive()) en;
}

export class Translations {
    @serializable(primitive()) en;
}

export class Currencies{
    @serializable(primitive()) _id;
    @serializable(primitive()) positionType;
    @serializable(object(Translations)) translations;
}

export class Countries {
    @serializable(object(PreferredCurrency)) preferredCurrency;
    @serializable(primitive()) priority;
    @serializable(object(Translations)) translations;
    @serializable(primitive()) vatPercent;
    @serializable(primitive()) _id;
}

export class StoreModel{
    @serializable(object(CurrentCountry)) currentCountry;
    @serializable(object(CurrentCurency)) currentCurrency;
    @serializable(list(object(Countries))) countries;
}

const getStoreModelSchema = () => {
    createModelSchema(PreferredCurrency, {
        id: true,
        name: true
    });

    createModelSchema(Translations, {
        en: true,
    });
    createModelSchema(Currencies, {
        _id:true,
        positionType:true,
        translations:object(Translations)
    });

    return createModelSchema(StoreModel, {
        currentCountry: object(CurrentCountry),
        currentCurrency: object(CurrentCurency),
        countries : list(object(Countries)),
        currencies : list(object(Currencies)),
    });
};

export const serializeStore = (data) => {
    const schema = getStoreModelSchema();
    return JSON.stringify(serialize(schema,data));
};

export const deserializeStore = (jsonData = '{}') => {
    const schema = getStoreModelSchema();
    return deserialize(schema,JSON.parse(jsonData));
};
