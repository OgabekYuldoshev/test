<template>
    <div>
        <h3>Employers:</h3>
        <p>Employers: {{$store.state.employers.length}}</p>
        <p>Mans: {{$store.state.male}}</p>
        <p>Womans: {{$store.state.famale}}</p>
        <h3>Sections:</h3>
        <p>IT: {{$store.state.IT}}</p>
        <p>Bugalterya: {{$store.state.bugalterya}}</p>
        <p>Marketing: {{$store.state.marketing}}</p>
        <h3>Avarage: {{$store.state.middleAge}}</h3>
    </div>
</template>