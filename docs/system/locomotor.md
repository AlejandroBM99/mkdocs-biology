# Aparato locomotor

El aparato locomotor realiza los movimientos que ordena el sistema nervioso en respuesta a los estímulos externos e internos.

El aparato locomotor está formado por el [**sistema esquelético**](skeleton.md) y el [**sistema muscular**](muscular.md), que actúan conjuntamente para permitir el movimiento del cuerpo.

```mermaid
%%{init: {'theme':'forest'}}%%
flowchart LR
    A[Estímulo]:::orange --> B[Receptor]:::green
    B --> C[Impulso nervioso]:::orange
    C --> D[Sistema nervioso central]:::green
    D --> E[Orden]:::orange
    E --> F[Aparato locomotor]:::green
    F --> G[Movimiento]:::orange

    classDef orange fill:#FFCC99,stroke:#E67E22,stroke-width:2px;
    classDef green fill:#C9E8B6,stroke:#1A7D3A,stroke-width:2px;
```