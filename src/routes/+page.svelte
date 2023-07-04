<script lang="ts">
  import ListStudents from '../component/ListStudents.svelte'
  import PivotCommits from '../component/PivotCommits.svelte'

  export let data
</script>

<div class="flex flex-col gap-10 w-2/3 items-center justify-center mx-auto">
  {#await data.streamed.studentSummary}
    Loading...
  {:then value}
    <ListStudents data={value} />
  {:catch error}
    {error.message}
  {/await}
  {#await data.streamed.pivotReposStudents}
    Loading...
  {:then value}
    <PivotCommits pivotTable={value} studentNames={data.uniqueNames} />
  {:catch error}
    {error.message}
  {/await}

  {#await data.streamed.pivotDaysStudents}
    Loading...
  {:then value}
    <PivotCommits pivotTable={value} studentNames={data.uniqueNames} />
  {:catch error}
    {error.message}
  {/await}
</div>
