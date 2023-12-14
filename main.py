import streamlit as st
import plotly.graph_objects as go
import webbrowser
def vark_test():
    st.title("VARK Test")

    # Updated Questions and Options
    questions = [
        "You are helping someone who wants to go to your airport, the center of town, or railway station. You would:",
        "A website has a video showing how to make a special graph. There is a person speaking, some lists and words describing what to do, and some diagrams. You would learn most from:",
        "You are planning a vacation for a group. You want some feedback from them about the plan. You would:",
        "You are going to cook something as a special treat. You would:",
        "A group of tourists want to learn about the parks or wildlife reserves in your area. You would:",
        "You are about to purchase a digital camera or mobile phone. Other than price, what would most influence your decision?"
    ]

    options = [
        ["a. Go with her.", "b. Tell her the directions.", "c. Write down the directions.", "d. Draw, or show her a map, or give her a map."],
        ["a. Seeing the diagrams.", "b. Listening.", "c. Reading the words.", "d. Watching the actions."],
        ["a. Describe some of the highlights they will experience.", "b. Use a map to show them the places.", "c. Give them a copy of the printed itinerary.", "d. Phone, text, or email them."],
        ["a. Cook something you know without the need for instructions.", "b. Ask friends for suggestions.", "c. Look on the Internet or in some cookbooks for ideas from the pictures.", "d. Use a good recipe."],
        ["a. Talk about, or arrange a talk for them about parks or wildlife reserves.", "b. Show them maps and internet pictures.", "c. Take them to a park or wildlife reserve and walk with them.", "d. Give them a book or pamphlets about the parks or wildlife reserves."],
        ["a. Trying or testing it.", "b. Reading the details or checking its features online.", "c. It is a modern design and looks good.", "d. The salesperson telling me about its features."]
    ]

    # Updated Scoring Chart for Questions 1 to 6
    scoring_chart = {
        "1": {"a": "Kinesthetic", "b": "Auditory", "c": "Reading", "d": "Visual"},
        "2": {"a": "Visual", "b": "Auditory", "c": "Reading", "d": "Kinesthetic"},
        "3": {"a": "Kinesthetic", "b": "Visual", "c": "Reading", "d": "Auditory"},
        "4": {"a": "Kinesthetic", "b": "Auditory", "c": "Visual", "d": "Reading"},
        "5": {"a": "Auditory", "b": "Visual", "c": "Kinesthetic", "d": "Reading"},
        "6": {"a": "Kinesthetic", "b": "Reading", "c": "Visual", "d": "Auditory"}
    }

    # User Responses
    responses = []

    # Display Questions and Get User Responses
    for i in range(len(questions)):
        st.markdown(f"**{i + 1}. {questions[i]}**")
        selected_option = st.radio(f"Select the most appropriate option for Question {i + 1}:", options[i])
        responses.append(selected_option.split(".")[0].strip().lower())

    # Calculate Results
    scores = calculate_result(responses, scoring_chart)

    top_two_styles = list(scores.keys())[:2]
    
    st.success(f"Your top two VARK learning styles are: **{top_two_styles[0]}** and **{top_two_styles[1]}**")

    # Display Common Pie Chart for All Learning Styles
    # st.info("Learning Style Scores:")
    plot_common_pie_chart(scores, len(responses))
    if st.button("Continue"):
        # st.markdown("[Click here to continue](https://www.example.com)")
        webbrowser.open_new_tab("http://127.0.0.1:5500/capacity.html")

def calculate_result(responses, scoring_chart):
    scores = {"Auditory": 0, "Visual": 0, "Reading": 0, "Kinesthetic": 0}
    for i, response in enumerate(responses):
        question_number = str(i + 1)
        scores[scoring_chart[question_number][response]] += 1

    return scores

def plot_common_pie_chart(scores, total_responses):
    labels = list(scores.keys())
    values = [scores[style] / total_responses * 100 for style in labels]

    fig = go.Figure(data=[go.Pie(labels=labels, values=values, textinfo='percent+label')])
    fig.update_layout(showlegend=True, title="Common Learning Style Scores")
    st.plotly_chart(fig)

if __name__ == "__main__":
    vark_test()
