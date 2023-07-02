<script>
	export let data;
	
	const mediumTime = new Intl.DateTimeFormat("en-NZ", {
  timeStyle: "medium",
  dateStyle: "long",
});
	
const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
})

const DIVISIONS = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
]

function formatTimeAgo(date) {
  let duration = (date - new Date()) / 1000

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i]
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name)
    }
    duration /= division.amount
  }
}
</script>

<table class="table-auto border-collapse border border-slate-500">
	<thead>
		<tr>
			<th>Name</th>
			<th>Total Commits</th>
			<th>Progress Score</th>
			<th>Last Commit Date</th>
		</tr>
	</thead>
	<tbody>
		{#each data as student}
			<tr>
				<td class="text-right">{student.name}</td>
				<td class="text-center">{student.totalCommits}</td>
				<td class="text-center">{isNaN(student.progressScore) ? 0: student.progressScore.toFixed(1) }</td>
				<td class="text-center">{mediumTime.format(student.lastCommitDate)}</td>
				<td class="text-center">{formatTimeAgo(student.lastCommitDate)}</td>
			</tr>
		{/each}
	</tbody>
</table>
