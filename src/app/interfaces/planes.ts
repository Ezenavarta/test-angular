export interface Planes {
    result: boolean;
    error: string;
    response: {
        planes: [
            {
                plan: string;
                nombre: string;
                periodos: [
                    {
                        periodo: number;
                        valor: number;
                    }
                ]
            },
        ]
    };
}

export interface AddPlanResult {
    result: boolean;
    error: string;
    response: {
        id_producto: number;
    };
}

export interface GetCart {
    result: boolean;
    error: string;
    response: [
        {
            nombre: string;
            plan: string;
            valor: number;
            periodo: number;
            id_producto: number;
        }
    ];
}

export interface DeleteItem {
    result: boolean;
    error: string;
    response: null;
}
