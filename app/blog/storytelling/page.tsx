import Image from 'next/image';

export default function Storytelling() {
	return (
		<span className='blog-writeup'>
			<h2> Tips for the Perfect Data Storytelling Presentation</h2>
			<p>
				Author: <em>Muskan Bagrecha</em>
			</p>
			<Image src='/story.svg' alt='Data Storytelling Presentation' className='image' width={766} height={537} />
			<br />
			“Stories constitute the single most powerful weapon in a leader’s arsenal.” - Dr. Howard Gardner, professor at Harvard University
			<br />
			<br />
			<br />
			<p>
				Storytelling is an integral part of the growth of every business. The exponential growth in business data is paving the way for
				creating powerful dashboards that are capable of creating an impact with just a few words. Businesses are relying on these powerful
				dashboards to tell their stories, drive engagement, and influence audiences. In this article, we will understand the power of
				storytelling and what you can do to tell a fantastic story with your data.
			</p>
			<h3>The Importance of Storytelling</h3>
			<p>
				Imagine you have a 5-year-old. You’re reading out a story to him from his favorite book. The book is filled with pictures from
				illustrations to cartoonish drawings. The book has fewer words and yet you and your kid find yourselves completely absorbed in the
				story. Now imagine a data dashboard in place of the storybook. The visualizations, if presented in the right way, can have a profound
				impact on the users. In fact, as things become more complex, we as humans tend to go back to how we learned new things when we were
				smaller - through visuals. It is easier to understand the data when the figures and content are depicted in images that paint a story.
				The exponential growth in business data is helping businesses and stakeholders make data-driven decisions in order to take appropriate
				actions. However, it so happens that sometimes the dashboards are bombarded with data points which makes it overwhelming and
				confusing. In order to make the data and insights more meaningful, they need to be woven into a compelling story. This makes the data
				more consumable, allowing stakeholders to act better for the growth of the business.
			</p>
			<h3>Practical Tips to Improve Your Data Storytelling</h3>
			<h4>Understand your user personas</h4>
			<p>
				It is very important to understand the expectations of your stakeholders. So ask yourself what are the metrics that matter to them and
				what kind of analysis is important to them. Also, have a clear understanding of whether your stakeholders want high-level reporting or
				if they are interested in the granular details - in which case you can incorporate drill-down visuals.{' '}
			</p>
			<h4>Be a great interrogator</h4>
			<p>
				In order to paint great stories, you need to be a great interrogator first. Ask yourself questions like: Why do these numbers and
				trends matter at all? How does this information impact the stakeholders? Am I really presenting something which will allow my audience
				to know their next step of action?
			</p>
			<h4>Include the appropriate metrics</h4>
			<p>
				After you get to know more about your user personas and your data, it is time for you to pick out the most relevant metrics for your
				story. These metrics should have an actionable outcome. Keep in mind that these metrics should be for your intended stakeholders only
				as they will take the next action.
			</p>
			<h4>Visuals can be a game-changer</h4>
			<p>
				Picking out the right visualizations is fundamental to your successful storytelling. For instance, not many people can process and
				understand the information contained in tables. Worse yet, if the table has huge amounts of data, it can get difficult to go through
				the data and search for something. Data visualization can transform these massive pieces of data into easily understandable visual
				representations.
			</p>
			<p>
				Remember to adhere to the best practices while incorporating visualizations. Our guide to dashboard design principles will help you
				with the same. Context is very important Imagine a scenario where you are shown a figure which indicates the performance of a company.
				Now compare this to the scenario where you are shown the same figure along with the data indicating how it has increased or decreased
				from the past. Needless to say, the latter gives more context to the end-user and helps them understand whether the changes are for
				the good or bad. This is a very important factor of storytelling as sometimes, spikes in data can point towards certain events that
				may have affected it. Essentially, this can bring up questions such as why did it happen? In case of a negative trend, you can ask how
				it can be avoided, etc. Including indicators or warnings comparing your current performance with your target would be the cherry on
				the cake. This will show how your business is growing towards your annual goals.
			</p>
			<h4>Provide Interactivity</h4>
			<p>
				A well-designed dashboard should be able to guide the user on how to consume the content. This can be achieved through interactivity.
				An interactive dashboard enables users to drill down into the data so that they can see it in more detail. This allows the users to
				gain a deeper insight, enabling them to make informed decisions. [embed an interactive dashboard] Introducing comparison Sometimes,
				comparison can be introduced to show how two or more subjects, like A and B, really differ. It can raise questions such as why ABC
				performs better than XYZ or what should be focused on for improvement.
			</p>
			<h3>Wrapping Up</h3>
			<p>
				Analysts should be able to deliver meaningful insights which can be grasped effortlessly. A good dashboard should be able to relay the
				most important information which can prompt the next step of action from the stakeholders. A good data story can bring facts to life
				and leave a profound impact. When in doubt, ask someone to look at the dashboard for a few seconds. Then ask them if they can recall
				the information. If they are able to recall most of the things, it is a good sign and means that your dashboard is relaying the
				information effectively.
			</p>
		</span>
	);
}
